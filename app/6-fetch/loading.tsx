import { FOLDER_APP } from "@constant";

export default function Loading() {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.FETCH.LOADING}</span>
      Loading from 6-fetch ...
      <br />
    </div>
  );
}
