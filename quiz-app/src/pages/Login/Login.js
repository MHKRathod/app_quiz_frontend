import {Fragment} from "react";
import {Navbar} from "../../component/Navbar/Navbar";
import {AuthLogin} from "../../component/Auth/Login";

export const Login = () => {
    return(
          <Fragment>
              <Navbar/>
              <AuthLogin/>
          </Fragment>
    )
}