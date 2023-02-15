import React, { useEffect, useState } from "react";
import Alert from "./Alert";

function Grocery() {
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [message,setMessage]=useState(null)
  const [type,setType]=useState('')
  useEffect(()=>{
    const time=setTimeout(() => {
        setMessage(null)
    }, 3000);
    return (()=>clearTimeout(time))
  },[message])
  const savedData = JSON.parse(localStorage.getItem("datas"));
  useEffect(() => {
    if (savedData && savedData.length > 0) {
      setItems(savedData);
    }
  }, []);

  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setItems(items.concat(value));
    setMessage('Saved Successfully')
    setType('success')
    }
    if (edit) {
      setValue(items[editIndex]);
      const newItems = [...items];
      newItems[editIndex] = value;
      setItems(newItems);
      setEdit(false);
    setMessage('Edited Successfully')
    setType('warning')
    }
    setValue("");
  };
  useEffect(() => {
    localStorage.setItem("datas", JSON.stringify(items));
  }, [items]);
  const handleDelete = (delIndex) => {
    const newItems = items.filter((item, index) => {
      return index !== delIndex;
    });
    setItems(newItems);
    setMessage('Deleted Successfully')
    setType('danger')
  };
  const handleEdit = (chIndex) => {
    setEdit(true);
    setEditIndex(chIndex);
    setValue(items[chIndex]);
  };
  return (
    <div>
      <div className="box rounded shadow m-auto mt-5 d-flex flex-column align-items-center justify-content-center">
     { message && <Alert message={message} type={type}/>}

        <h3 className="font-weight-bold">Grocery Bud</h3>
        <form onSubmit={handleSubmit} className="d-flex my-3">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="e.g. eggs"
          />
          <button type="submit" className="rounded-0 btn btn-primary py-0">
            {edit ? "Edit" : "Submit"}
          </button>
        </form>
        {items && items.map((item, index) => {
          return (
            <div
              key={index}
              className="buds d-flex justify-content-between my-1 p-1"
            >
              <p className="m-0 text-capitalize">{item}</p>
              <div className="d-flex">
                <p className="m-0">
                  <i
                    onClick={() => {
                      handleEdit(index);
                    }}
                    title="Edit"
                    className="fa-regular fa-pen-to-square mx-2"
                  ></i>
                </p>
                <p className="m-0">
                  <i
                    onClick={() => {
                      handleDelete(index);
                    }}
                    title="Delete"
                    className="fa-solid fa-trash-can mx-2"
                  ></i>
                </p>
              </div>
            </div>
          );
        })}
        {(items.length<1) && <p>No items to show.</p>}
       { items.length>0 && <button onClick={() =>{ 
        setItems([]);
        setMessage('Cleared all items')
        }} className="btn bg-none">
          Clear Items
        </button>}
      </div>
    </div>
  );
}

export default Grocery;
