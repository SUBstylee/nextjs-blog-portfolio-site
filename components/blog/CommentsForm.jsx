import { useRef,useState,useEffect } from "react";
import { submitComment } from "../../services";

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl=useRef();
  const nameEl=useRef();
  const emailEl=useRef();
  const storeDataEl=useRef();

  useEffect(() => {
    nameEl.current.value=window.localStorage.getItem('name');
    emailEl.current.value=window.localStorage.getItem('email');
  }, []);
  

  const handleCommentSubmission=()=>{
    setError(false);
    const {value: comment}=commentEl.current;
    const {value: name}=nameEl.current;
    const {value: email}=emailEl.current;
    const {checked: storeData}=storeDataEl.current;
    if(!comment || !name || !email){
      setError(true);
      return;
    };
    const commentObj={name, email, comment, slug};
    if(storeData){
      window.localStorage.setItem('name',name);
      window.localStorage.setItem('email',email);
    }else{
      window.localStorage.removeItem('name',name);
      window.localStorage.removeItem('email',email);
    };
    submitComment(commentObj).then((res)=>{
      setShowSuccessMessage(true);
      setTimeout(()=>{
        setShowSuccessMessage(false);
      },3000);
    });
  };
  return (
    <div className="bg__theme shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Comment <span className="text-lg">(will be submitted for review)</span></h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea ref={commentEl} rows="7" placeholder="Comment" name="comment"/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input type='text' ref={nameEl} placeholder="Name" name="name"/>
          <input type='email' ref={emailEl} placeholder="Email" name="email"/>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <input className="cursor-pointer" type="checkbox" ref={storeDataEl} id='storeData' name="storeData" defaultChecked />
            <label className="text-gray-500 cursor-pointer pl-2" htmlFor="storeData">Save my email and name for the next time I comment.</label>
          </div>
        </div>
        {error && <div className="grid grid-cols-1 gap-4 mb-4"><p className="text-xs text-red-500">All fields are required!</p></div>}
        <div className="mt-8">
          <button type="button" onClick={handleCommentSubmission} className='btn btn-primary'>
            Add Comment
          </button>
          {showSuccessMessage && <span className="text-xl pl-3 font-semibold mt-3 text-green-500">Comment submitted for review!</span>}
        </div>
        
    </div>
  );
};

export default CommentsForm;