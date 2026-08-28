import { Building2 } from "lucide-react";

const LoginBranding = () => {
  return (
    <div className="relative hidden w-1/2 overflow-hidden lg:block cursor-default">
      {/* Background Image */}
      <img
        src="/login_img.png"
        alt="Maternal healthcare"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#00656B]/95 via-[#00656B]/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-32 left-10 max-w-130 text-white xl:left-14">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/35 backdrop-blur-sm">
            <Building2 size={19} strokeWidth={1.8} />
          </div>

          <span className="font-semibold tracking-wide">
            Government of Kerala
          </span>
        </div>

        <h1 className="max-w-120 text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
          Maternal Health
          <br />
          Excellence
        </h1>

        <p className="mt-2 max-w-120 text-sm leading-6 text-white/85 xl:text-base font-medium">
          Empowering healthcare providers with advanced clinical tools to ensure
          the highest standard of care for expectant mothers across the state.
        </p>
      </div>
    </div>
  );
};

export default LoginBranding;