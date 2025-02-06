import { Plugin } from "@elizaos/core";
import { getRelevantTweetsAction } from "./actions/getRelevantTweets";

export const cookiePlugin: Plugin = {
    name: "cookie",
    description: "Cookie Swarm API plugin for Eliza",
    actions: [getRelevantTweetsAction],
    evaluators: [],
    providers: [],
};

export default cookiePlugin;