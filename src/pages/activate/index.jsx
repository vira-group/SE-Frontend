import { useRouter } from "next/router";
import { useEffect } from "react";
import { DoubleBubble } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";
import { AccountActivation } from "../../Utils/connection";

export default function Activation() {
  const router = useRouter();

  useEffect(() => {
    if (!router.query.uid) {
      return;
    }
    async function activate() {
      const message = await AccountActivation(
        router.query.uid,
        router.query.token
      );
      console.log(message);
    }
    activate().then(() => {
      router.push("/login");
    });
  }, [router]);

  useEffect(() => {
    console.log("HOI");
  }, []);
  // async componentDidMount() {
  //   var splitted = window.location.toString().split("/");
  //   await this.setState({ token: decodeURIComponent(splitted.pop()) });
  //   await this.setState({ uid: decodeURIComponent(splitted.pop()) });
  //   console.log(this.state.token + ",,,,,,,,," + this.state.uid);
  //   AccountActivation(this.state.uid, this.state.token).then((ret) => {
  //     if (ret == true) {
  //       window.location.replace("/login");
  //     }
  //   });
  // }

  // console.log("HOI");

  return (
    <div>
      HOI
      <DoubleBubble center={true} text="activating..." bgColor={"white"} />
    </div>
  );
}
