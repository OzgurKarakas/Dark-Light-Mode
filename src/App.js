import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "dark" : "light"
  );

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light");
    }
  }, []);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="h-screen bg-blue-200 dark:bg-black">
      <nav className="w-full flex justify-center items-center h-24 bg-blue-400 dark:bg-slate-700">
        <h1 className="dark:text-white">React and Tailwind CSS with Dark Mode</h1>
        <button onClick={changeTheme} className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md ml-4">{theme} mode</button>
      </nav>
      <div>
        <p className="m-3 dark:text-white text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nihil eligendi quod temporibus est eum illo totam voluptas possimus eos, ea qui dicta eaque consequatur veniam cupiditate recusandae et! Fugit culpa dolore aspernatur quae sint non placeat possimus totam? Dignissimos officiis saepe quo. In fuga reiciendis natus beatae ex excepturi sit exercitationem cupiditate atque cumque. Sit ex consectetur, perspiciatis fugiat nesciunt consequatur, perferendis quod deleniti blanditiis aperiam quasi, aspernatur ut rem aliquam iure itaque numquam tempora tenetur neque voluptate aut? Nulla cum nihil enim recusandae odit a corporis, quidem, voluptates impedit doloremque at alias voluptatem quibusdam hic minus! Numquam vero expedita cumque quae quos minima sint voluptates cum saepe optio dolores natus consequuntur magnam alias vitae, molestiae voluptatum ut eaque neque nostrum dolore aut eum ipsam. Voluptatum dicta explicabo, corporis sunt animi provident quibusdam quo quos expedita quia cumque molestias. Ipsa, magni aperiam, corporis sit enim et molestiae mollitia sint commodi labore repellendus? Ratione perspiciatis sit debitis dolorum mollitia quas quisquam earum tempore pariatur unde architecto magnam, voluptate omnis iusto alias vel officia animi veniam facilis excepturi quasi. Error eveniet fuga suscipit, necessitatibus quaerat eaque voluptates distinctio neque aspernatur rem ut reprehenderit, qui veniam aliquam dolore alias! Nulla odit quisquam repellat, magnam ex nemo aperiam neque inventore officia repudiandae nesciunt esse nam qui aut sit laborum exercitationem expedita dolorum? Vero, hic ut esse a quis ab. Earum aliquam sapiente aspernatur cumque vel voluptas recusandae molestias adipisci quo, quibusdam quas deserunt maiores asperiores pariatur atque voluptatibus sit dolorem repellendus facilis tempora?
        </p>
      </div>
    </div>
  );
}

export default App;
