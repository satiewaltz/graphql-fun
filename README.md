# GraphQL Ghibi
> GraphQL Layer for the [Studio Ghibi API](https://ghibliapi.herokuapp.com).

Example Queries:
```graphql
{
	films {
		title,
    description
  }
}

{
	species {
		name,
    classification
  }
}

{
	film(id: 1) {
		title,
    description
  }
}

{
  singleSpecies(id: 1) {
		name,
    classification
  }
}
```

## Installing / Getting started

Just clone, install, and start!

```shell
git clone https://github.com/satiewaltz/graphql-ghibi
cd graphql-ghibi/
yarn install
yarn start
```

Open `localhost:4000` to perform GraphQL Queries.

## Licensing

MIT