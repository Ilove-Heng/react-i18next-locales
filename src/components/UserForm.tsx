import { FormEvent, useRef, useState }  from "react";

export default function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(name, email);
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <p>Name: {name}</p>
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <p>Email: {email}</p>
          </div>
          <UserFormItems />
        </form>
      );
}

function UserFormItems() {
    const [isVisible, setIsVisible] = useState(true);
    const [items, setItems] = useState<string[]>([]);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    function addItem(){
        if(inputRef.current && inputRef.current.value){
            setItems([...items, inputRef.current.value]);
            inputRef.current.value = "";
        }
    }

    return (
        <div>
          <div className="">
            <button onClick={() => setIsVisible(!isVisible)} className="button-1">
              {isVisible ? 'Hide' : 'Show'} Items
            </button>
            {isVisible && (
              <div className="mt-2 ">
                <input type="text" ref={inputRef}
                placeholder="Add item" />
                
                <button onClick={addItem} className="ml-2 button-1">Add Item</button>
                <ul>
                  {items.map((item, index) => (
                    <li key={index} onClick={() => setSelectedItem(item)}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <p>Selected Item: {selectedItem}</p>
          </div>
        </div>
      );
};