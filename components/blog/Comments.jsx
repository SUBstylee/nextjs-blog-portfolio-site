import { useState,useEffect } from "react";
import moment from "moment";
import parse from 'html-react-parser';
import { getComments } from "../../services";

const Comments = ({slug}) => {
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    getComments(slug).then((result)=>setComments(result));
  },[]);
    return (
      <div>
        {comments.length>0 && (
          <div className="bg__theme shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
              {comments.length}
              {' '}
              {comments.length>1?'Comments':'Comment'}
            </h3>
            {comments.map((comment)=>(
              <div key={comment.createdAt} className='border-b border-100 mb-4 pb-4'>
                <p className="mb-4">
                  <span className="font-semibold text-light">{comment.name}</span>
                  {' '}
                  <span className=" text-light">on</span>
                  {' '}
                  <span className=" text-light">{moment(comment.createdAt).format('dddd, MMM Do YYYY')}</span>
                  {' '}
                  <span className=" text-light">at</span>
                  {' '}
                  <span className=" text-light">{moment(comment.createdAt).format('HH:mm')}</span>
                </p>
                <p className="whitespace-pre-line text-600 w-full">{parse(comment.comment)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Comments;