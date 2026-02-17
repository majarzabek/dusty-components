import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginReact } from "@rsbuild/plugin-react";

export default {
  plugins: [pluginReact(), pluginSass()],
};
