import {useState} from "react";

//Custom Hook
function useFormInput(initValue) {
    const [value, setValue] = useState(initValue);

    const onChange = (event) => {
        setValue(event.target.value)

    }
    return [value, onChange]
}
export {useFormInput}