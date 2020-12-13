import { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const member = {
      id: "1",
      firstName: "",
      lastName: "",
    };

    setMembers([...members, member]);

    return () => setMembers([]);
  }, []);

  const addMember = () => {}; // add empty member with id

  const removeMember = () => {}; // remove  member by id

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(members);
  };

  const changeValue = (id, e) => {
    const newValues = members.map((member) => {
      if (member.id === id) {
        member[e.target.name] = e.target.value;
      }
      return member;
    });

    setMembers(newValues);
  };

  return (
    <>
      <h1>Add New Member</h1>
      <form className={classes.root} onSubmit={onSubmit}>
        {members.map((member) => (
          <div id={member.id} key={member.id}>
            <TextField
              value={member.firstName}
              name="firstName"
              placeholder="First Name"
              onChange={(e) => changeValue(member.id, e)}
            ></TextField>
            <TextField
              name="lastName"
              value={member.lastName}
              placeholder="Last Name"
              onChange={(e) => changeValue(member.id, e)}
            ></TextField>
          </div>
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default App;

// each member has first and last name and id
//on did mount initialize empty member with id

//om app press add empty member but with id

//on edit text box edit current member by id
//on change for first and last name

<div id="xxx">
  <firstname></firstname>
  <lastname></lastname>
  <add />
  <remove />
</div>;
