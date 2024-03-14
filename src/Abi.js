[
  {
    inputs: [
      {
        internalType: "address",
        name: "_organizer",
        type: "address",
      },
    ],
    name: "addOrganizer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_organizer",
        type: "address",
      },
    ],
    name: "addVoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "candidate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "candidateAddedEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "electionEndEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "electionStartEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_organizer",
        type: "address",
      },
    ],
    name: "endVoting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_partyName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_organizer",
        type: "address",
      },
    ],
    name: "setCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_organizer",
        type: "address",
      },
    ],
    name: "startVoting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "voterVotedEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_candidateAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_organizer",
        type: "address",
      },
    ],
    name: "voteTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "organizerOfElection",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "organizerAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "electionStarted",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "electionEnded",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_organizer",
        type: "address",
      },
    ],
    name: "showWinner",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "candidateId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "candidateName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "candidateAge",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "partyName",
            type: "string",
          },
          {
            internalType: "address",
            name: "candiadateAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "votesRececieved",
            type: "uint256",
          },
        ],
        internalType: "struct MultiVoting.Candidate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
