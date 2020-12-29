/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getApplicantProfile = /* GraphQL */ `
  query GetApplicantProfile($userName: String!) {
    getApplicantProfile(userName: $userName) {
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
export const listApplicantProfiles = /* GraphQL */ `
  query ListApplicantProfiles(
    $userName: String
    $filter: ModelApplicantProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listApplicantProfiles(
      userName: $userName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecuriterComment = /* GraphQL */ `
  query GetRecuriterComment($id: ID!) {
    getRecuriterComment(id: $id) {
      id
      candidateID
      comment
      createdAt
      updatedAt
    }
  }
`;
export const listRecuriterComments = /* GraphQL */ `
  query ListRecuriterComments(
    $filter: ModelRecuriterCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecuriterComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        candidateID
        comment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
