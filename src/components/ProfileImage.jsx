const ProfileImage = ({ src, alt }) => (
  <div className="flex items-center justify-center order-2 md:order-1 col-span-1">
    <div className="relative w-full max-w-xs aspect-4/5 rounded-lg md:rounded-xl overflow-hidden border border-white-50/25 shadow-2xl group">
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/15 to-blue-50/5"   
        aria-hidden="true"
      />

      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-full object-contain scale-[0.95] origin-center transition-transform duration-500 group-hover:scale-[0.98]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
    </div>
  </div>
);

export default ProfileImage;
