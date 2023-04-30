import React, { useState } from "react";
import AuthPageLayout from "@/views/layouts/AuthPageLayout";
import { Alert, Box, Snackbar, Typography } from "@mui/material";
import InputField from "@/views/components/common/InputField";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [email, setEmail] = useState("admin@gmail.com");
  const [pass, setPass] = useState("Password@1");

  const handleLogin = () => {
    setLoading(true);
    if (email === "admin@gmail.com" && pass === "Password@1") {
      localStorage.setItem("loginSts", true);
      setOpenSnack(true);
      setTimeout(() => {
        setLoading(false);
        setOpenSnack(false);
        router.push("/");
      }, 2000);
    }
  };

  return (
    <AuthPageLayout title={"Login"}>
      <Typography variant="h4" fontSize={36} fontWeight="bold" color="#4B1C7C">
        Login
      </Typography>
      <Typography variant="body1" color={"#000"} fontSize={18}>
        Sign in to continue
      </Typography>

      <Box mt={3} />
      <InputField
        label={"Your Email"}
        type="email"
        value={email}
        onChnage={(e) => setEmail(e.target.value)}
      />
      <Box mt={2} />
      <InputField
        label={"Your Password"}
        type="password"
        value={pass}
        onChnage={(e) => setPass(e.target.value)}
      />

      <Typography variant="body2" fontWeight={100} fontSize={14} mt={2}>
        By creating an account or logging in, you agree to our Terms & Privacy
        Policy.
      </Typography>

      <LoadingButton
        loading={loading}
        variant="contained"
        fullWidth
        sx={{ p: 1.2, mt: 5, textTransform: "capitalize" }}
        onClick={handleLogin}
      >
        Login
      </LoadingButton>
      <Snackbar open={openSnack} autoHideDuration={1000}>
        <Alert severity="success">Login Success</Alert>
      </Snackbar>
    </AuthPageLayout>
  );
};
export default Login;
