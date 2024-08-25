export default function FormStatus({ status }) {
  return status ? (
    <p className="text-center mt-4 text-sm text-zinc-400">{status}</p>
  ) : null;
}
