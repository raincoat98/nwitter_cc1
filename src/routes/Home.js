import React, { useState } from "react";
import { dbService } from "fBase";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const onSubmit = async event => {
    event.preventDefault();
    await dbService.collection("nweets").add({
      nweet,
      createdAt: Date.now(),
    });
    setNweet("");
  };
  const onChange = ({ target: { value } }) => {
    setNweet(value);
    console.log(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={nweet}
        onChange={onChange}
        type="text"
        placeholder="what's on your mind?"
        maxLength={120}
      />
      <input type="submit" value="Nweet" />
    </form>
  );
};
export default Home;
