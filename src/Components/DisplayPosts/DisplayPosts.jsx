
const DisplayPosts = (props) => {
    return (
        <div>
            {props.parentEntries.map((post, index) =>{
                return (
                    <div>
                        <p>{post.name}</p>
                        <p>{post.userPost}</p>
                    </div>
                    

                );
            })}
            
        </div>
  
    );
};
 
export default DisplayPosts;