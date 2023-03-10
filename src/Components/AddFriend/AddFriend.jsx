import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAddFriendMutation } from "../../app/fetures/userApi/userSlice";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import SmallSpiner from "../Spiner/SmallSpiner";

const AddFriend = ({ currentUser, users, isError, isLoading }) => {
  const { user } = useContext(AuthContext);
  const [restPeople, setRestPeople] = useState([]);

  const [addfriend, { isLoading: addLoad }] = useAddFriendMutation();

  const otherPeople = users?.filter((u) => u.email !== user?.email);

  const friends = currentUser?.friends;
  const following = currentUser?.following;
  const followers = currentUser?.followers;

  useEffect(() => {
    if (followers?.length && following?.length && friends?.length) {
      const restPeopleByFollowing = otherPeople?.filter(
        ({ _id: id1 }) => !following?.some(({ id: id2 }) => id2 === id1)
      );
      const restPeopleByFollowers = restPeopleByFollowing?.filter(
        ({ _id: id1 }) => !followers?.some(({ id: id2 }) => id2 === id1)
      );
      const restPeopleByFriends = restPeopleByFollowers?.filter(
        ({ _id: id1 }) => !friends?.some(({ id: id2 }) => id2 === id1)
      );
      setRestPeople(restPeopleByFriends);
    } else if (following?.length && friends?.length) {
      const restPeopleByFollowing = otherPeople?.filter(
        ({ _id: id1 }) => !following?.some(({ id: id2 }) => id2 === id1)
      );
      const restPeopleByFriends = restPeopleByFollowing?.filter(
        ({ _id: id1 }) => !friends?.some(({ id: id2 }) => id2 === id1)
      );
      setRestPeople(restPeopleByFriends);
    } else if (following?.length && followers?.length) {
      const restPeopleByFollowing = otherPeople?.filter(
        ({ _id: id1 }) => !following?.some(({ id: id2 }) => id2 === id1)
      );
      const restPeopleByFollowers = restPeopleByFollowing?.filter(
        ({ _id: id1 }) => !followers?.some(({ id: id2 }) => id2 === id1)
      );
      console.log("okaa");
      setRestPeople(restPeopleByFollowers);
    } else if (followers?.length && friends?.length) {
      const restPeopleByFollowers = otherPeople?.filter(
        ({ _id: id1 }) => !followers?.some(({ id: id2 }) => id2 === id1)
      );
      const restPeopleByFriends = restPeopleByFollowers?.filter(
        ({ _id: id1 }) => !friends?.some(({ id: id2 }) => id2 === id1)
      );
      setRestPeople(restPeopleByFriends);
    } else if (followers?.length) {
      const restPeopleByFollowers = otherPeople?.filter(
        ({ _id: id1 }) => !followers?.some(({ id: id2 }) => id2 === id1)
      );
      setRestPeople(restPeopleByFollowers);
    } else if (friends?.length) {
      const restPeopleByFriends = otherPeople?.filter(
        ({ _id: id1 }) => !friends?.some(({ id: id2 }) => id2 === id1)
      );
      setRestPeople(restPeopleByFriends);
    } else if (following?.length) {
      const restPeopleByFollowing = otherPeople?.filter(
        ({ _id: id1 }) => !following?.some(({ id: id2 }) => id2 === id1)
      );
      setRestPeople(restPeopleByFollowing);
    } else {
      setRestPeople(otherPeople);
    }
  }, [following, followers, friends]);

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;
  let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const handleAddFriend = (receiverId) => {
    const sender = {
      name: currentUser?.name,
      email: currentUser?.email,
      id: currentUser?._id,
      profileImg: currentUser?.profileImg,
      receiverId,
      currentDate,
      currentTime,
    };
    addfriend(sender);
  };

  if (isLoading) {
    return <SmallSpiner />;
  }
  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="mt-6">
      {restPeople?.length ? (
        <>
          <hr className="border-b border-gray-400 my-5 opacity-60" />
          <div className="flex justify-between">
            <h4 className="font-semibold pl-2 text-lg">Peoples you may know</h4>
            {restPeople?.length > 4 && (
              <Link to={"/peoples"}>
                <p className="mr-1 text-[#a624d1]">See all</p>
              </Link>
            )}
          </div>

          {restPeople
            ?.slice(0)
            ?.reverse()
            ?.slice(0, 4)
            ?.map((user, i) => (
              <div key={i} className="py-4 px-1 hover:bg-slate-300 rounded-md">
                <div className="flex justify-between items-center">
                  <div className="flex">
                    {user?.profileImg ? (
                      <Link to={`/profile/${user.email}`}>
                        <img
                          className="lg:h-12 lg:w-12 h-10 w-10 rounded-full"
                          src={user?.profileImg}
                          alt=""
                        />
                      </Link>
                    ) : (
                      <Link to={`/profile/${user.email}`}>
                        <img
                          className="lg:h-12 lg:w-12 h-10 w-10 rounded-full"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU"
                          alt=""
                        />
                      </Link>
                    )}

                    <div className="ml-3">
                      <Link to={`/profile/${user.email}`}>
                        <p className="text-base font-semibold hover:underline">
                          {user?.name?.length > 20
                            ? `${user?.name.slice(0, 20)}...`
                            : user.name}
                        </p>
                      </Link>
                      <div className="text-xs flex items-center">
                        <img
                          className="w-4 h-4 rounded-full mr-2"
                          src={user?.profileImg}
                          alt=""
                        />
                        <p>1 mutual</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      disabled={addLoad}
                      onClick={() => handleAddFriend(user?._id)}
                      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[#a624d1] text-gray-100 text-sm px-2 py-[6px] mr-2 rounded-md inline-block"
                    >
                      Add friend
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddFriend;
