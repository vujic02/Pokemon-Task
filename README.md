# Pokemon Task
Pokemon task is a simple app created with: Next.js Static Site Generation & SCSS, the app features a super simple home page that displays Pokemons from Pokeapi. 
# Design 
### Home Page
![Home page](https://i.ibb.co/8P7gGrN/Home-Page.png)
### Pokemon Details (Dynamic route page)
![Pokemon Details (Dynamic route page)](https://i.ibb.co/M74zx7S/Pokemon-Details.png)

### Figma Design: [Pokemon-Task](https://www.figma.com/file/O4fIKjUQ61yJU8alP3c4eu/Pokemon-Task)

# Solutions & Decisions
In summary I planned the project out and separated it into 4 main sections:
  - Design the app
  - Code the functionality
  - Style the app
  - Write tests

As for the solutions for the issues and obstacles that I encountered
most of them were minor and easy to fix, but the one that held me up was the show more and show less functionality that I decided to add. \
Comment from the code inside the project explaining how I fixed the issue that I was facing:\
```From pokemon results array we slice from index 0 to visible state which is 9 (initially), then after clicking the show more button we add 9 to visible state, which dynamically updates how many pokemons are shown```
```
          {pokemons.results.slice(0, visible).map((pokemon, idx) => (
            <Link href={`/pokemon/${idx + 1}`} key={idx}>
              <div className={styles.pokemon}>
                <img
                  className={styles.pokemon__image}
                  src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                />
                <p className={styles.pokemon__name}>{pokemon.name}</p>
              </div>
            </Link>
          ))}
```
I would like to add to the comment from the code that when show less button is clicked,
it also dynamically updates the number of pokemons that are displayed on the page.
When the show less is clicked, the visible state is set to initial value which is 9.

There was also one more problem which I solved really quick, which is the pokemon pictures.
The pokemon pictures are from another api, because the provided doesn't have high-resolution pictures.
I used ```https://img.pokemondb.net/``` for the images. 

# Possible Improvements
I already implemented one idea that I had which is show more pokemons & show less pokemons functionality.\
That functionality can be further improved upon. The app at the moment lists only 99 pokemon, when each one is shown,\
the improvement here is to make the list have no limit or to set the limit manually inside a input form(for example set a number higher that 9 and the app lists that number of pokemons from the api).
Also there can be added a search & sort functionality by Pokemon name.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
