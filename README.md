# [WIP] Boilerplate for AWS lambda/sfn devlopment

## Create a new lambda

1. Copy base from example.
    ```bash
    cp -r .examples/lambda lambdas/example
    ```
2. Update name in `package.json` and `README.md`.
3. Update target in `build` command (ex: `--target=node-10`).
4. `lerna bootstrap && lerna run build`

## Create a new package

1. Copy base from example.
    ```bash
    cp -r .examples/package packages/example
    ```
2. Update name in `package.json` and `README.md`.
3. Build and link
    ```bash
    lerna bootstrap && \
    lerna run build && \
    npm i example-package@file:packages/example && \
    lerna link
    ```

## Install a package in lambda

```bash
lerna add example-package --scope=example-lambda
```

Then change `example-package` version to `*` in `example-lambda/package.json`.


# TODO: https://aws.amazon.com/fr/blogs/infrastructure-and-automation/deploying-aws-lambda-functions-using-aws-cloudformation-the-portable-way/
