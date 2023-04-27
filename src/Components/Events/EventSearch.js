export const EventSearch = ({setterFunction}) => {
    return (
        <div>
        <input
        onChange={(event) => {
            setterFunction(event.target.value)
        }}
         type="text" 
         placeholder="Enter search terms"
          />
   </div> )
}