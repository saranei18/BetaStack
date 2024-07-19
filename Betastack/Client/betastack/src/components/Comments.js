import React, { useContext, useEffect } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import productContext from '../context/productContext';


function GetUserName(userid){
  return "Martha";
}

function Comments(props) {

  const comment = props.comment;
  const context = useContext(productContext);
  const updateProductComments = context.updateProductComments;

  const handleUpdateComment = async () => {
    console.log("updating the comment");
    var status = await updateProductComments(comment);
    if(status === 1){
      console.log("success");
    }
  }

  return (
    <>
      <div class="row d-flex justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="card shadow-0 border" style={{ backgroundColor: '#f0f2f5' }}>
            <div class="card-body p-4">
              <div class="card mb-4">
                <div class="card-body">
                  <p>{comment.comment}</p>
                  <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                      
                      <p class="small mb-0 ms-2">{props.comment.username}</p>
                    </div>
                    <div class="d-flex flex-row align-items-center">
                      <p class="small text-muted mb-0">Upvote?</p>
                      <i class="far fa-thumbs-up mx-2 fa-xs text-body product-itemBt text-primary" style={{ marginTop: '-0.16rem' }} onClick={handleUpdateComment}></i>
                      <p class="small text-muted mb-0">{comment.totalVotes}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comments