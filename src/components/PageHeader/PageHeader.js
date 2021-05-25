import "./PageHeader.css"

const PageHeader = (props) => {
  return (
    <div className="header-container">
      <h1>{props.title}</h1>
    </div>
  )
}

export default PageHeader

