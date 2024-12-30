const NewComment = () => {
  return (
    <div className="md:w-[80%] md:mx-auto mx-5  py-3 px-2">
      <form className="flex flex-col" action="">
        <label
          className="text-sm row-start-3 col-span-2 md:col-span-1 font-bold mb-5"
          htmlFor="">
          دیدگاه شما
        </label>
        <textarea
          name=""
          id=""
          rows="4"
          cols="60"
          className="border rounded-sm  border-slate-400 row-start-3 col-span-3 row-span-2 md:col-span-4"></textarea>
        <input
          type="submit"
          value="ثبت دیدگاه"
          className="row-start-5 col-span-5 bg-green-600 w-24 py-1.5 mt-4 mx-auto rounded-md"
        />
      </form>
    </div>
  );
};

export default NewComment;
