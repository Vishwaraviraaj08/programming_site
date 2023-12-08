const questions = [
    {
        "qid": 1,
        "difficulty": "Easy",
        "problemTitle": "Two Sum",
        "problemDescription": "Given an array of integers, find two numbers such that they add up to a specific target.",
        "exampleTestCases": [
            {
                "input": "[2, 7, 11, 15]",
                "output": "[0, 1]"
            }
        ],
        "constraints": [
            "2 <= nums.length <= 10^4",
            "-10^9 <= nums[i] <= 10^9",
            "0 <= target <= 10^9"
        ]
    },
    {
        "qid": 2,
        "difficulty": "Hard",
        "problemTitle": "Two Sum II - Input array is sorted",
        "problemDescription": "Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.",
        "exampleTestCases": [
            {
                "input": "[2, 7, 11, 15]",
                "output": "[1, 2]"
            },
            {
                "input": "[[1, 2, 3, 4, 5]]",
                "output": "[5, 4, 3, 2, 1]"
            },
            {
                "input": "[[1, 2, 3, 4, 5]]",
                "output": "[5, 4, 3, 2, 1]"
            }
        ],
        "constraints": [
            "2 <= numbers.length <= 3 * 10^4",
            "-10^9 <= numbers[i] <= 10^9",
            "numbers is sorted in non-decreasing order."
        ]
    },
    {
        "qid": 3,
        "difficulty": "Medium",
        "problemTitle": "Merge Two Sorted Lists",
        "problemDescription": "Merge two sorted linked lists and return it as a new sorted list.",
        "exampleTestCases": [
            {
                "input": "[[1, 2, 4], [1, 3, 4]]",
                "output": "[1, 1, 2, 3, 4, 4]"
            }
        ],
        "constraints": [
            "The number of nodes in both lists is in the range [0, 50].",
            "-100 <= Node.val <= 100",
            "Both l1 and l2 are sorted in non-decreasing order."
        ]
    },
    {
        "qid": 4,
        "difficulty": "Easy",
        "problemTitle": "Reverse Linked List",
        "problemDescription": "Reverse a singly linked list.",
        "exampleTestCases": [
            {
                "input": "[[1, 2, 3, 4, 5]]",
                "output": "[5, 4, 3, 2, 1]"
            }
        ],
        "constraints": [
            "The number of nodes in the list is in the range [0, 5000].",
            "-5000 <= Node.val <= 5000",
            "The list is guaranteed to be valid."
        ]
    }
];
export default questions;
