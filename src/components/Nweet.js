import React, { useState } from "react";
import { dbService } from "fBase";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const onDeleteClick = async event => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
      // delete nweet'
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
    }
    console.log(event);
  };
  const toggleEditing = () => setEditing(prev => !prev);

  const onSubmit = async event => {
    event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text: newNweet,
    });
    toggleEditing();
  };

  const onChange = event => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit"
              value={newNweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="Edit" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {isOwner && (
            <React.Fragment>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </React.Fragment>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
