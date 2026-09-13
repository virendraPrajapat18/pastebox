import React from "react";

const WelcomeSection = ({ user }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    if (hour >= 17 && hour < 21) return "Good evening";
    return "Good night";
  };

  const greeting = getGreeting();

  const getAvatarUrl = () => {
    const name = (user?.fullname || user?.username || 'User').trim();
    const parts = name.split(/\s+/).filter(Boolean);
    const length = parts.length > 1 ? 2 : 1;
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&bold=true&size=128&length=${length}`;
  };

  const defaultAvatar = getAvatarUrl();
  const [imgSrc, setImgSrc] = React.useState(null);

  React.useEffect(() => {
    if (user?.profilePic && !user.profilePic.includes('iran.liara.run')) {
      setImgSrc(user.profilePic);
    } else {
      setImgSrc(getAvatarUrl());
    }
  }, [user]);

  const handleError = () => {
    setImgSrc(getAvatarUrl());
  };

  return (
    <section
      className="relative overflow-hidden rounded-2xl p-8 mb-6 text-[var(--text-on-primary)] animate-fade-in"
      style={{
        background: "var(--gradient-bg)", // dynamic gradient via theme
      }}
    >
      <div className="relative z-10 flex items-center gap-6 flex-wrap">
        <img
          src={imgSrc || defaultAvatar}
          onError={handleError}
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-white shadow object-cover bg-white/20"
        />
        <div>
          <h1 className="text-2xl font-bold">{greeting}, {user?.fullname}! ✨</h1>
          <p className="opacity-90">{user?.email}</p>
          <p className="opacity-70 text-sm">@{user?.username}</p>
        </div>
      </div>

      {/* Floating gradient light effect */}
      <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-floating pointer-events-none" />
    </section>
  );
};

export default WelcomeSection;
