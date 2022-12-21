# fe-onboarding

## Prerequisites

<details>
<summary>Homebrew</summary>

[Homebrew](https://brew.sh/) is a popular package manager for mMacOS, we will use it to install some tools. Follow the instruction on the homepage to install it.

If you encounter the error:

```text
fatal: ambiguous argument 'refs/remotes/origin/master': unknown revision or path not in the working tree.**
```

It's caused by the configuration of git, try the following solution:

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
git config --global core.compression 0
git config --global http.postBuffer 1048576000
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Then install some tools with Homebrew:

```shell
brew install pre-commit nvm
```

</details>

<details>
<summary>Docker(Powered by Colima)</summary>

Our development process would heavily rely on containers, so we will use docker to manage and host the containers.

Officially only Docker Desktop, which is a paid product, be provided on macOS, so we choose [Colima](https://github.com/abiosoft/colima) to provide the docker engine and client. Follow the instructions to install and configure Colima:

```shell
brew install colima
# start colima with more resources than default setting
colima start --cpu 4 --memory 8 --disk 100
# create a soft link of /var/run/docker.sock, as some tools could connect to this default location of docker scoket
sudo ln -sv $HOME/.colima/default/docker.sock /var/run/docker.sock
```

Finally, set up the correct `DOCKER_HOST` environment variable by appending the following to the `~/.zshrc` file:

```shell
# open ~/.zshrc file with whatever text editor
export DOCKER_HOST="unix://${HOME}/.colima/default/docker.sock"
```

</details>

<details>
<summary>NodeJS</summary>

Install the latest LTS version of NodeJS (at the time of writing it's `v18.12.1`) by nvm:

```shell
nvm install 18.12.1
nvm use 18.12.1
nvm alias default 18.12.1
```

</details>

## Local Development

Please always use **REBASE** instead of merge to pull the latest code from remote!! as we adopt the TBD practice.

Please remember to **INSTALL** `pre-commit` hooks **BEFORE** writing any code!!

```shell
pre-commit install
```

<details>
<summary>Initialize playwright</summary>

You need to initialize `playwright` by `npx playwright install`, it's a one-time job.
For Mac with M1 chip, please comment out `webkit` in `playwright.config.ts` as it's not supported on arm64 linux yet.

```typescript
// {
//   name: "webkit",
//   use: {
//     ...devices["Desktop Safari"],
//   },
// },
```

</details>

<details>
<summary>Start local application</summary>

Start dependency services first, then run `npm run dev`.

The major reason not to use batect is unable to watch file changes inside container.

</details>

<details>
<summary>Run tests locally</summary>

`npm run test:unit` to run unit tests. `npm run test:e2e` to run e2e tests.

</details>

<details>
<summary>Run CI steps locally</summary>

`./batect ci`

Uses batect to run all CI steps locally, including: `unit-test`, `e2e-test`, `code-style`, `secret-scan`, `dependency-scan`, `build-dist`.

</details>

## Documentation

Find other documentation under the `docs` folder.
