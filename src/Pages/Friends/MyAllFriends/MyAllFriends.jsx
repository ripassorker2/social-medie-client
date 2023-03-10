import React, { useContext } from "react";
import {
   useDeleteFriendMutation,
   useGetUserByEmailQuery,
} from "../../../app/fetures/userApi/userSlice";
import Loader from "../../../Components/Spiner/Loader";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyAllFriends = () => {
   const { user } = useContext(AuthContext);

   const { data: currentUser, isLoading } = useGetUserByEmailQuery(user?.email);
   const [deleteFrn] = useDeleteFriendMutation();

   const handleDeleteFriend = (receiverId) => {
      const sender = {
         name: currentUser?.name,
         email: currentUser?.email,
         id: currentUser?._id,
         profileImg: currentUser?.profileImg,
         receiverId,
      };
      deleteFrn(sender);
   };

   if (isLoading) {
      return <Loader />;
   }

   return (
      <div className="bg-white flex-1 md:p-5 p-3 overflow-y-auto h-[100vh]">
         <h4 className="text-xl font-semibold mt-11">All friends</h4>
         <div className="grid lg:grid-cols-4 md:grid-cols-2  mt-3 lg:gap-10 md:gap-8 gap-6">
            {currentUser?.friends?.length ? (
               <>
                  {currentUser?.friends
                     ?.slice(0)
                     ?.reverse()
                     ?.map((friend, i) => (
                        <div
                           key={i}
                           className="rounded-xl border-2 overflow-hidden"
                        >
                           <div>
                              {friend?.profileImg ? (
                                 <Link to={`/profile/${friend?.email}`}>
                                    <img
                                       className="h-[200px] w-full"
                                       src={friend.profileImg}
                                       alt=""
                                    />
                                 </Link>
                              ) : (
                                 <Link to={`/profile/${friend?.email}`}>
                                    <img
                                       className="h-[200px] w-full"
                                       src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                       alt=""
                                    />
                                 </Link>
                              )}
                           </div>
                           <div className="p-4">
                              <h4 className="text-xl mb-2">{friend?.name}</h4>
                              <button
                                 onClick={() => handleDeleteFriend(friend.id)}
                                 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[#a624d1] w-full text-gray-100 text-sm px-2 py-[6px] mr-2 rounded-md inline-block"
                              >
                                 Delete friend
                              </button>
                           </div>
                        </div>
                     ))}
               </>
            ) : (
               <p className=" text-lg ">No friends available</p>
            )}
         </div>
      </div>
   );
};

export default MyAllFriends;
