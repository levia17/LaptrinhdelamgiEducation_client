import clsx from "clsx";

import style from "./systemUser.module.scss";

function SystemUser() {
  return (
    <div className={clsx(style.containerSystemUser, 'd-flex-c_horizontal')}>
      <button className={clsx("d-flex-c", style.Btn, style.login)}></button>
      <button className={clsx("d-flex-c", style.Btn, style.register)}></button>
    </div>
  );
}

export default SystemUser;
