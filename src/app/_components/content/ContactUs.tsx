import { ChangeEvent, FormEvent, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { toast } from "sonner";
function ContactUs() {
  const [emailForm, setEmailForm] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const info = [
    {
      name: "HOME ADDRESS",
      description: "Roxas 5800, PH",
    },
    {
      name: "NATIONALITY",
      description: "Filipino",
    },
    {
      name: "PHONE NUMBER",
      description: "+639298309621",
    },
    {
      name: "EMAIL ADDRESS",
      description: "tristanvicclarito2003@gmail.com",
    },
    {
      name: "FREELANCE AVAILABILITY",
      description: "Part-Time",
    },
  ];

  const handleInputChang = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setEmailForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  async function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://hook.us2.make.com/ddnq1o9slwo2kpd19hm7exu5evhoylki",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailForm),
        },
      );
      console.log(response);
      const data = await response.text();
      console.log(data);
      toast.success("Successfully sent your message");
    } catch (err) {
      toast.error("Something went wrong, please try again");
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col w-full">
      <h1 className=" text-primary text-2xl poppins-semibold">
        👋🏼 Get in Touch
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center justify-center pt-2">
        <div className="flex col-span-2 gap-2">
          <form
            onSubmit={submitForm}
            className="w-full p-2 border-zinc-600 border rounded-md space-y-2 flex flex-col"
          >
            <div className="w-full flex flex-col space-y-1">
              <label
                htmlFor="name"
                className="text-[0.7rem] text-primary poppins-semibold pl-1"
              >
                Name
              </label>
              <input
                onChange={handleInputChang}
                required
                type="text"
                placeholder="@e g John Doe"
                value={emailForm.name}
                id="name"
                name="name"
                className="text-white py-2 px-3 rounded-md bg-[#2A2627] text-[0.75rem] border border-zinc-700"
              />
            </div>
            <div className="w-full flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-[0.7rem] text-primary poppins-semibold pl-1"
              >
                Email Address
              </label>
              <input
                onChange={handleInputChang}
                required
                type="email"
                value={emailForm.email}
                placeholder="@e g johndoe@gmail.com"
                id="email"
                name="email"
                className="text-white py-2 px-3 rounded-md bg-[#2A2627] text-[0.75rem] border border-zinc-700"
              />
            </div>
            <div className="w-full flex flex-col space-y-1">
              <label
                htmlFor="message"
                className="text-[0.7rem] text-primary poppins-semibold pl-1"
              >
                Your Message
              </label>

              <textarea
                name="message"
                onChange={handleInputChang}
                placeholder="Hello..."
                value={emailForm.message}
                className="text-white py-2 px-3 rounded-md bg-[#2A2627] text-[0.75rem] border border-zinc-700 h-[200px] resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#2A2627] text-primary w-1/2 py-2 text-[0.8rem] mx-auto rounded-md border border-primary/40"
            >
              SUBMIT
            </button>
          </form>
          <span
            className="text-center text-zinc-400 text-sm hidden lg:block"
            style={{ writingMode: "vertical-lr" }}
          >
            ------------ OR ------------
          </span>
        </div>
        <div className="flex justify-between flex-col">
          <div className="flex flex-col justify-center items-center gap-1.5">
            {info.map((user) => (
              <div
                key={user.name}
                className="border-zinc-700 border flex justify-between rounded-md p-2 w-full"
              >
                <div className="flex flex-col space-y-1 overflow-hidden">
                  <span className="text-primary poppins-semibold text-[0.6rem]">
                    {user.name}:
                  </span>
                  <h5 className="text-white text-[0.7rem] truncate">
                    {user.description}
                  </h5>
                </div>
                <span className="text-primary text-[0.8rem]">
                  <GoArrowUpRight />
                </span>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
