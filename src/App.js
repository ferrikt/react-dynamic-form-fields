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

  // add empty member with id
  const addMember = () => {
    setMembers([
      ...members,
      {
        id: (members.length + 1).toString(),
        firstName: "",
        lastName: "",
      },
    ]);
  };
  // remove  member by id
  const removeMember = (id) => {
    setMembers(members.filter((member) => member.id != id));
  };

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
          <div key={member.id}>
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
            <IconButton
              disabled={members.length === 1}
              onClick={() => removeMember(member.id)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={addMember}>
              <AddIcon />
            </IconButton>
          </div>
        ))}

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
          onClick={onSubmit}
        >
          Send
        </Button>
      </form>
    </>
  );
};

export default App;
