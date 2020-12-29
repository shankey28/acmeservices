/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateApplicantProfile = /* GraphQL */ `
  subscription OnCreateApplicantProfile {
    onCreateApplicantProfile {
      id
      email
      userName
      name
      yOe
      caFocus
      payOpt
      gender
      appStatus
      resume {
        bucket
        region
        key
      }
      employer
      comments {
        items {
          id
          candidateID
          comment
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateApplicantProfile = /* GraphQL */ `
  subscription OnUpdateApplicantProfile {
    onUpdateApplicantProfile {
      id
      email
      userName
      name
      yOe
      caFocus
      payOpt
      gender
      appStatus
      resume {
        bucket
        region
        key
      }
      employer
      comments {
        items {
          id
          candidateID
          comment
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteApplicantProfile = /* GraphQL */ `
  subscription OnDeleteApplicantProfile {
    onDeleteApplicantProfile {
      id
      email
      userName
      name
      yOe
      caFocus
      payOpt
      gender
      appStatus
      resume {
        bucket
        region
        key
      }
      employer
      comments {
        items {
          id
          candidateID
          comment
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRecuriterComment = /* GraphQL */ `
  subscription OnCreateRecuriterComment {
    onCreateRecuriterComment {
      id
      candidateID
      comment
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRecuriterComment = /* GraphQL */ `
  subscription OnUpdateRecuriterComment {
    onUpdateRecuriterComment {
      id
      candidateID
      comment
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRecuriterComment = /* GraphQL */ `
  subscription OnDeleteRecuriterComment {
    onDeleteRecuriterComment {
      id
      candidateID
      comment
      createdAt
      updatedAt
    }
  }
`;
