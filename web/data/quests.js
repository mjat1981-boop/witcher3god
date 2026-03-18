const quests = [
    // Base Game Quests
    {
        id: 1,
        name: "Lilac and Gooseberries",
        description: "Find Yennefer of Vengerberg",
        rewards: ["Experience", "Gold"],
        completed: false
    },
    {
        id: 2,
        name: "A Princess in Distress",
        description: "Rescue the princess from a tower.",
        rewards: ["Experience", "Gold"],
        completed: false
    },
    // Hearts of Stone Quests
    {
        id: 3,
        name: "The Contract: Missing Brother",
        description: "Hunt down the beast that is terrorizing a village.",
        rewards: ["Experience", "Gold", "Unique Item"],
        completed: false
    },
    {
        id: 4,
        name: "Eternal Flame",
        description: "A quest involving a mysterious flame.",
        rewards: ["Experience", "Gold"],
        completed: false
    },
    // Blood and Wine Quests
    {
        id: 5,
        name: "Blood Sweet Blood",
        description: "Unravel the mystery of the missing vineyard owner.",
        rewards: ["Experience", "Gold", "Wine"],
        completed: false
    },
    {
        id: 6,
        name: "Sight of the Obelisk",
        description: "A side quest involving ancient obelisks.",
        rewards: ["Experience", "Gold"],
        completed: false
    }
];

module.exports = quests;