import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Create from "@mui/icons-material/Create";

import { useState } from "react";

function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const handleChange =(evt) => {
        setText(evt.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    };

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Outlined" 
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    InputProps = {{
                        endAdornment: 
                        <InputAdornment aria-label="create todo" position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                            type="submit"
                        >
                        <Create />
                        </IconButton>
                        </InputAdornment> 
                    }}
                />
            </form>
        </ListItem>
    );
}

export default TodoForm;