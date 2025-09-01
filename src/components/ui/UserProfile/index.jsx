import avatar from '../../../assets/image-avatar.webp'

const UserProfile = () => {
  return(
    <div className="flex items-center gap-2">
      <img src={avatar} width="32" height="32" />
      <p className='font-bold dark:text-gray-100'>John Doe</p>
    </div>
  );
};

export { UserProfile };