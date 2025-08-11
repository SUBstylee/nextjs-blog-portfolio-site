import { useRef, useState, useEffect } from 'react'
import { submitComment } from '../../services'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    storeData: false,
  })

  useEffect(() => {
    setLocalStorage(window.localStorage)
    const initalFormData = {
      name: window.localStorage.getItem('name') || '',
      email: window.localStorage.getItem('email') || '',
      storeData: !!(
        window.localStorage.getItem('name') ||
        window.localStorage.getItem('email')
      ),
      comment: '',
    }
    setFormData(initalFormData)
  }, [])

  const onInputChange = (e) => {
    const { target } = e
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }))
    }
  }

  const handlePostSubmission = () => {
    setError(false)
    const { name, email, comment, storeData } = formData
    if (!name || !email || !comment) {
      setError(true)
      return
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    }

    if (storeData) {
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
    } else {
      localStorage.removeItem('name')
      localStorage.removeItem('email')
    }

    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        setFormData((prevState) => ({
          ...prevState,
          name: storeData ? prevState.name : '',
          email: storeData ? prevState.email : '',
          comment: '',
        }))
        setShowSuccessMessage(true)
        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 3000)
      }
    })
  }
  const safeFormData = {
    name: formData.name ?? '',
    email: formData.email ?? '',
    comment: formData.comment ?? '',
    storeData:
      typeof formData.storeData === 'boolean' ? formData.storeData : false,
  }
  return (
    <div className="bg__theme mb-8 rounded-lg p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        Leave a Comment{' '}
        <span className="text-lg">(will be submitted for review)</span>
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          value={safeFormData.comment}
          onChange={onInputChange}
          rows="7"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          value={safeFormData.name}
          onChange={onInputChange}
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          value={safeFormData.email}
          onChange={onInputChange}
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div>
          <input
            className="cursor-pointer"
            checked={safeFormData.storeData}
            onChange={onInputChange}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-500 text__theme cursor-pointer pl-2"
            htmlFor="storeData"
          >
            Save my email and name for the next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <div className="mb-4 grid grid-cols-1 gap-4">
          <p className="text-xs text-red-500">All fields are required!</p>
        </div>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="btn btn-primary"
        >
          Add Comment
        </button>
        {showSuccessMessage && (
          <span className="mt-3 pl-3 text-xl font-semibold text-green-500">
            Comment submitted for review!
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
