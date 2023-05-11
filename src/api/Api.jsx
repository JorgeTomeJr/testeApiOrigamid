import PhotoPost from "./endpoints/PhotoPost"
import TokenPost from "./endpoints/TokenPost"
import UsePost from "./endpoints/UsePost"


const Api = () => {
  return (
    <div>
        <h1>POST</h1>
        <UsePost/>
        <hr />
        <h1>Token POST  - Validação</h1>
        <TokenPost/>
        <hr/>
        <h1>PhotoPost</h1>
        <PhotoPost/>
    </div>
  )
}

export default Api