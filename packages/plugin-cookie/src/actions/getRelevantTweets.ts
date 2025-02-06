import {
    elizaLogger,
    Action,
    ActionExample,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
} from "@elizaos/core";
import { validateCookieConfig } from "../environment";
import { getRelevantTweetsExamples } from "../examples";
import { createCookieService } from "../services";

export const getRelevantTweetsAction: Action = {
    name: "COOKIE_GET_RELEVANT_TWEETS",
    similes: [
        "GET_TWEETS",
        "FETCH_TWEETS",
        "Get tweets",
        "Fetch tweets",
        "Relevant tweets"
    ],
    description: "Fetch the most relevant tweets about your set topic.",
    validate: async (runtime: IAgentRuntime) => {
        await validateCookieConfig(runtime);
        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback: HandlerCallback
    ) => {
        const config = await validateCookieConfig(runtime);
        const cookieService = createCookieService(
            config.COOKIE_API_KEY,
            config.COOKIE_API_URL,
            config.COOKIE_TWEETS_TOPIC
        );

        try {
            const relevantTweetsData = await cookieService.getRelevantTweets();
            elizaLogger.success(
                `Successfully fetched relevant tweets.`
            );
            if(callback) {
                const topUsersList = relevantTweetsData.ok
                    .slice(0, 10)
                    .map(tweet => `User: ${tweet.authorUsername}, engagementsCount: ${tweet.engagementsCount}`)
                    .join("\n");

                callback({
                    text: `Here is a relevant tweet from user ${relevantTweetsData.ok[0].authorUsername}:\n\n${relevantTweetsData.ok[0].text}\n\nHere are the top users who posted sorted by Cookie Swarm API's engagements count:\n\n${topUsersList}\n\nUsers on the list will receive rewards in our Guerrero Maya ecosystem based on their score. If you can't see your handle on the list, stay updated and follow our official accounts as we distribute rewards each season.`
                });
                return true;
            }
        } catch(error: any) {
            elizaLogger.error("Error in Cookie plugin handler: ", error.message);
            callback({
                text: `Error fetching relevant tweets: ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: getRelevantTweetsExamples as ActionExample[][],
} as Action;