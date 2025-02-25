import BackgroundImage from '@/components/background-image'

const Explore = () => {
  return (
    <article className="hero relative h-screen w-full">
      <BackgroundImage />
      <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-start bg-slate-900/50 p-10">
        <h1 className="font-cabin text-wattle-400 text-center text-3xl font-bold md:text-9xl">
          Explore a little more...
        </h1>
        <p className="font-roboto-mono text-s mt-4 w-full text-center text-slate-200 sm:text-base">
          Know exactly what you want? Search for a cocktail by its name.
        </p>
        <p className="-full font-roboto-mono text-s mt-4 text-center text-slate-200 sm:text-base">
          Curious about what goes into your favourite drinks? Search an
          ingredient and learn somthing new!
        </p>
        <form
          id="search-form"
          action=""
          className="mt-16 flex flex-col gap-3 md:flex-row md:gap-0"
        >
          <label htmlFor="search-input" className="sr-only">
            Search cocktail or ingredient
          </label>
          <input
            type="text"
            id="search-input"
            name="search-input"
            autoComplete="off"
            required
            className="bg-wattle-50 border-persian-pink-800 font-roboto-mono mr-0 border-t-2 border-r-2 border-b-2 border-l-2 p-2 sm:w-100 sm:border-r-0"
          />
          <label htmlFor="search-by" className="sr-only">
            Search by
          </label>
          <select
            name="search-by"
            id="search-by"
            className="bg-wattle-100 font-roboto-mono text-black border-persian-pink-800 border-t-2 border-r-2 border-b-2 border-l-2 p-2.5 sm:border-l-0"
          >
            <optgroup label="Choose one">
              <option value="search-name">Search by cocktail name</option>
              <option value="search-ingredient">Search ingredient</option>
            </optgroup>
          </select>
          <button
            type="submit"
            className="submit-btn font-roboto-mono shadow-solid hover:bg-persian-pink-800 bg-persian-pink-700 ms-2 self-center p-2.5 text-slate-200"
          >
            Search
          </button>
        </form>
        <p className="none-found full font-roboto-mono text-persian-pink-200 text-s mt-4 text-center sm:text-base"></p>
      </div>
    </article>
  )
}

export default Explore
