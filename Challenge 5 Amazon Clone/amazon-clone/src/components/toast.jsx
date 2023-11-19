import { useToast } from "@chakra-ui/react";

const Toast = () => {
  const toast = useToast();
  return (
    <>
      {console.log("Toast called")}
      {toast({
        title: "User already registered",
        status: "warning",
        duration: "5000",
        isClosable: true,
      })}
    </>
  );
};

export default Toast;
