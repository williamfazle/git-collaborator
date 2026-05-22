const FakeCaptcha = ({ checked, onChange, error }) => {
  return (
    <div>
      <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className="checkbox checkbox-primary"
        />
        <div className="flex-1">
          <p className="font-semibold">I am not a robot</p>
          <p className="text-sm text-base-content/60">
            Confirm this demo verification before continuing.
          </p>
        </div>
        <div className="rounded-xl bg-base-200 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50">
          CAPTCHA
        </div>
      </label>
      {error ? <p className="mt-2 text-sm text-error">{error}</p> : null}
    </div>
  );
};

export default FakeCaptcha;
