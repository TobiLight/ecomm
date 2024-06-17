
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const JWT_SECRET: string;
	export const DATABASE_HOST: string;
	export const DATABASE_PORT: string;
	export const DATABASE_NAME: string;
	export const DATABASE_USER: string;
	export const DATABASE_PASSWORD: string;
	export const DATABASE_TABLE_PREFIX: string;
	export const DATABASE_REJECT_UNAUTHORIZED: string;
	export const DATABASE_AUTOMATIC_MIGRATION: string;
	export const FILESYSTEM_DISK: string;
	export const AWS_ACCESS_KEY_ID: string;
	export const AWS_SECRET_ACCESS_KEY: string;
	export const S3_REGION: string;
	export const S3_BUCKET: string;
	export const S3_DIRECTORY: string;
	export const LESSOPEN: string;
	export const npm_package_devDependencies__types_node: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const npm_package_devDependencies_sveltekit_superforms: string;
	export const USER: string;
	export const NX_WORKSPACE_ROOT: string;
	export const npm_package_scripts_migration: string;
	export const npm_config_user_agent: string;
	export const GIT_ASKPASS: string;
	export const npm_package_devDependencies__types_bcrypt: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const WT_PROFILE_ID: string;
	export const npm_package_devDependencies_vite_imagetools: string;
	export const npm_package_nx_targets_prepare_outputs_0: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const CONDA_SHLVL: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const TERM_PROGRAM_VERSION: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const npm_package_engines_node: string;
	export const npm_package_devDependencies_flowbite_svelte: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const NX_INVOKED_BY_RUNNER: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_devDependencies_jsonwebtoken: string;
	export const npm_config_engine_strict: string;
	export const npm_config_resolution_mode: string;
	export const COLORTERM: string;
	export const _CE_M: string;
	export const WSL_DISTRO_NAME: string;
	export const COLOR: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_config_metrics_registry: string;
	export const WAYLAND_DISPLAY: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_zod: string;
	export const LOGNAME: string;
	export const FORCE_COLOR: string;
	export const npm_package_type: string;
	export const NAME: string;
	export const WSL_INTEROP: string;
	export const PULSE_SERVER: string;
	export const _: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_nx_targets_build_outputs_0: string;
	export const npm_config_prefix: string;
	export const npm_package_scripts_prepare: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies_text_case: string;
	export const npm_package_nx_targets_migration_inputs_0: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const npm_package_devDependencies_drizzle_kit: string;
	export const npm_config_cache: string;
	export const _CE_CONDA: string;
	export const NX_TASK_HASH: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const WT_SESSION: string;
	export const XDG_RUNTIME_DIR: string;
	export const LERNA_PACKAGE_NAME: string;
	export const npm_package_scripts_fmt: string;
	export const npm_config_frozen_lockfile: string;
	export const MAMBA_ROOT_PREFIX: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const npm_package_devDependencies_drizzle_orm: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_package_devDependencies_mysql2: string;
	export const LS_COLORS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const TERM_PROGRAM: string;
	export const npm_package_devDependencies__types_jsonwebtoken: string;
	export const npm_lifecycle_script: string;
	export const XML_CATALOG_FILES: string;
	export const CONDA_PYTHON_EXE: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const NODE_PATH: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__aws_sdk_lib_storage: string;
	export const npm_lifecycle_event: string;
	export const NX_CLI_SET: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_nx: string;
	export const npm_package_devDependencies_sharp: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_tslib: string;
	export const LESSCLOSE: string;
	export const CONDA_DEFAULT_ENV: string;
	export const npm_package_engines_pnpm: string;
	export const npm_package_devDependencies_bcrypt: string;
	export const npm_package_nx_targets_migration_outputs_0: string;
	export const NX_TASK_TARGET_TARGET: string;
	export const MAMBA_EXE: string;
	export const PNPM_PACKAGE_NAME: string;
	export const NX_LOAD_DOT_ENV_FILES: string;
	export const npm_package_scripts_typecheck: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const NX_TASK_TARGET_PROJECT: string;
	export const npm_package_devDependencies_eslint_plugin_prettier: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const npm_package_devDependencies_tailwind_merge: string;
	export const npm_config_globalignorefile: string;
	export const npm_execpath: string;
	export const CONDA_EXE: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_devDependencies__floating_ui_dom: string;
	export const npm_package_devDependencies_flowbite: string;
	export const npm_package_devDependencies_nx_cloud: string;
	export const npm_config_global_prefix: string;
	export const npm_package_devDependencies__iconify_svelte: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const CONDA_PREFIX: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const HOSTTYPE: string;
	export const npm_package_devDependencies__aws_sdk_client_s3: string;
	export const WSLENV: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const npm_package_devDependencies__antfu_eslint_config: string;
	export const NODE_ENV: string;
	export const VIPSHOME: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_APP_NAME: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		JWT_SECRET: string;
		DATABASE_HOST: string;
		DATABASE_PORT: string;
		DATABASE_NAME: string;
		DATABASE_USER: string;
		DATABASE_PASSWORD: string;
		DATABASE_TABLE_PREFIX: string;
		DATABASE_REJECT_UNAUTHORIZED: string;
		DATABASE_AUTOMATIC_MIGRATION: string;
		FILESYSTEM_DISK: string;
		AWS_ACCESS_KEY_ID: string;
		AWS_SECRET_ACCESS_KEY: string;
		S3_REGION: string;
		S3_BUCKET: string;
		S3_DIRECTORY: string;
		LESSOPEN: string;
		npm_package_devDependencies__types_node: string;
		CONDA_PROMPT_MODIFIER: string;
		npm_package_devDependencies_sveltekit_superforms: string;
		USER: string;
		NX_WORKSPACE_ROOT: string;
		npm_package_scripts_migration: string;
		npm_config_user_agent: string;
		GIT_ASKPASS: string;
		npm_package_devDependencies__types_bcrypt: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		SHLVL: string;
		WT_PROFILE_ID: string;
		npm_package_devDependencies_vite_imagetools: string;
		npm_package_nx_targets_prepare_outputs_0: string;
		MOTD_SHOWN: string;
		HOME: string;
		CONDA_SHLVL: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		TERM_PROGRAM_VERSION: string;
		VSCODE_IPC_HOOK_CLI: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		npm_package_engines_node: string;
		npm_package_devDependencies_flowbite_svelte: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		NX_INVOKED_BY_RUNNER: string;
		npm_package_devDependencies_svelte_check: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_devDependencies_jsonwebtoken: string;
		npm_config_engine_strict: string;
		npm_config_resolution_mode: string;
		COLORTERM: string;
		_CE_M: string;
		WSL_DISTRO_NAME: string;
		COLOR: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_typescript: string;
		npm_config_metrics_registry: string;
		WAYLAND_DISPLAY: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_zod: string;
		LOGNAME: string;
		FORCE_COLOR: string;
		npm_package_type: string;
		NAME: string;
		WSL_INTEROP: string;
		PULSE_SERVER: string;
		_: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_nx_targets_build_outputs_0: string;
		npm_config_prefix: string;
		npm_package_scripts_prepare: string;
		npm_package_scripts_lint: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies_text_case: string;
		npm_package_nx_targets_migration_inputs_0: string;
		npm_config_registry: string;
		TERM: string;
		npm_package_devDependencies_drizzle_kit: string;
		npm_config_cache: string;
		_CE_CONDA: string;
		NX_TASK_HASH: string;
		npm_config_node_gyp: string;
		PATH: string;
		NODE: string;
		npm_package_name: string;
		WT_SESSION: string;
		XDG_RUNTIME_DIR: string;
		LERNA_PACKAGE_NAME: string;
		npm_package_scripts_fmt: string;
		npm_config_frozen_lockfile: string;
		MAMBA_ROOT_PREFIX: string;
		DISPLAY: string;
		LANG: string;
		npm_package_devDependencies_drizzle_orm: string;
		npm_package_devDependencies_eslint: string;
		npm_package_devDependencies_mysql2: string;
		LS_COLORS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		TERM_PROGRAM: string;
		npm_package_devDependencies__types_jsonwebtoken: string;
		npm_lifecycle_script: string;
		XML_CATALOG_FILES: string;
		CONDA_PYTHON_EXE: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		NODE_PATH: string;
		npm_package_version: string;
		npm_package_devDependencies__aws_sdk_lib_storage: string;
		npm_lifecycle_event: string;
		NX_CLI_SET: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_nx: string;
		npm_package_devDependencies_sharp: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_tslib: string;
		LESSCLOSE: string;
		CONDA_DEFAULT_ENV: string;
		npm_package_engines_pnpm: string;
		npm_package_devDependencies_bcrypt: string;
		npm_package_nx_targets_migration_outputs_0: string;
		NX_TASK_TARGET_TARGET: string;
		MAMBA_EXE: string;
		PNPM_PACKAGE_NAME: string;
		NX_LOAD_DOT_ENV_FILES: string;
		npm_package_scripts_typecheck: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		NX_TASK_TARGET_PROJECT: string;
		npm_package_devDependencies_eslint_plugin_prettier: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		npm_package_devDependencies_tailwind_merge: string;
		npm_config_globalignorefile: string;
		npm_execpath: string;
		CONDA_EXE: string;
		XDG_DATA_DIRS: string;
		npm_package_devDependencies__floating_ui_dom: string;
		npm_package_devDependencies_flowbite: string;
		npm_package_devDependencies_nx_cloud: string;
		npm_config_global_prefix: string;
		npm_package_devDependencies__iconify_svelte: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_postcss: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		CONDA_PREFIX: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		WSL2_GUI_APPS_ENABLED: string;
		HOSTTYPE: string;
		npm_package_devDependencies__aws_sdk_client_s3: string;
		WSLENV: string;
		INIT_CWD: string;
		EDITOR: string;
		npm_package_devDependencies__antfu_eslint_config: string;
		NODE_ENV: string;
		VIPSHOME: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_APP_NAME: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
