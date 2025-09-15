            // Bai 4: Like / Dislike Post //
import React, {useState} from "react";

function LikeDislikePost(props) {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    return (
        <div style={{border: '1px solid black', padding: '10px', marginTop: '20px', margin: '20px'}}>
            <p>{props.text}</p>
            <button onClick={() => setLike(like + 1)}>Like | {like}</button>
            <button onClick={() => setDislike(dislike + 1)}>Dislike | {dislike}</button>
        </div>
    )
}
export default LikeDislikePost;