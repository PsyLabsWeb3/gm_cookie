import { ActionExample } from "@elizaos/core";

export const getRelevantTweetsExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "I wonder what the community thinks today?"
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me fetch the latest relevant tweets.",
                action: "COOKIE_GET_RELEVANT_TWEETS",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you fetch the most relevant tweets involving the community?"
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me fetch the latest relevant tweets.",
                action: "COOKIE_GET_RELEVANT_TWEETS",
            },
        }
    ]
];