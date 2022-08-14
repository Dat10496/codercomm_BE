# codercomm

    CoderComm is a social network. In this app, you can create an account, update your private information like: (name, avatarUrl, coverUrl, aboutMe, city, country, company, jobTitle, facebookLink, instagramLink, linkedinLink, twitterLink). You can make friend to other people, post a status,... like or dislike and comment this status

## User stories

### Authentication

-[] as a user, i can register for new account with name, email, password
-[] as a user, i can sign up with my account and password

### Users

-[] as a user, i can see list of other user so that i can send, accept, or decline friend request
-[] as a user, i can get my current profile into (stayed sign in after page refresh)
-[] as a user, i can see the profile of specific user given a user ID
-[] as a user, i can update my profile into like Avatar, Company, Job Title, Social Links, and short description

### Posts

-[] as a user, i can see list of post
-[] as a user, i can create a new post with text content, and image
-[] as a user, i can edit my post
-[] as a user, i can delete my post

### Comments

-[] as a user, i can see list of comment on post
-[] as a user, i can write a comment on post
-[] as a user, i can update my comments
-[] as a user, i can delete my comments

### Reactions

-[] as a user, i can react like or dislike of post or comment

### Friends

-[] as a user, i can send a friend request to another user who is not my friend
-[] as a user, i can see list of friend request i have received
-[] as a user, i can see list of friend request who i have sent
-[] as a user, i can see list of my friend
-[] as a user, i can accept or decline friend request
-[] as a user, i can cancel a friend request who i sent
-[] as a user, i can unfriend a user in my friend list

## Endpoint APIs

### Auth APIs

```Javascript
/**
 * @route POST /auth/login
 * @description Log in with username and password
 * @body {email, password}
 * @access Public
 * /
```

### User APIs

```Javascript
/**
* @route POST /users
* @description Register new user
* @body {name, email, password}
* @access Public
* /
```

```Javascript
/**
* @route GET /users?page=1&limit=10
* @description Get user with pagination
* @access Login required
* /
```

```Javascript
/**
* @route GET /users/me
* @description Get current user Info
* @access Login required
* /
```

```Javascript
/**
* @route GET /users/:id
* @description Get a user profile
* @access Login required
* /
```

```Javascript
/**
* @route PUT /users/:id
* @description Update user profile
* @body {name, avatarUrl, coverUrl, aboutMe, city, country, company, jobTitle, facebookLink, instagramLink, linkedinLink, twitterLink}
* @access Login required
* /
```

### Post APIs

```Javascript
/**
* @route GET posts/user/:userId?page=1&limit=10
* @description Get all posts an user with pagination
* @access Login required
* /
```

```Javascript
/**
* @route POST /posts
* @description Create a new post
* @body {content, image}
* @access Login required
* /
```

```Javascript
/**
* @route PUT /posts/:id
* @description Update a post
* @body {content, image}
* @access Login required
* /
```

```Javascript
/**
* @route DELETE /posts/:id
* @description Delete a post
* @access Login required
* /
```

```Javascript
/**
* @route GET /posts/:id
* @description Get a single post
* @access Login required
* /
```

```Javascript
/**
* @route GET /posts/:id/comments
* @description Get comments
* @access Login required
* /
```

### Comments APIs

```Javascript
/**
* @route POST /comments
* @description Create new comment
* @body {content, postId}
* @access Login required
* /
```

```Javascript
/**
* @route PUT /comments/:id
* @description Update a comment
* @access Login required
* /
```

```Javascript
/**
* @route DELETE /comments/:id
* @description Delete a comment
* @access Login required
* /
```

```Javascript
/**
* @route GET /comments/:id
* @description Get details of a comment
* @access Login required
* /
```

### Reactions APIs

```Javascript
/**
* @route POST /reactions
* @description Save a reactions to post or comment
* @body {targetType: "Post" or "Comment", targetId: "Like" or "Dislike"}
* @access Login required
* /
```

### Friends APIs

```Javascript
/**
* @route POST /friends/request
* @description Send a friend request
* @body {to : "User ID"}
* @access Login required
* /
```

```Javascript
/**
* @route GET /friends/request/incoming
* @description Get list of receive pending request
* @access Login required
* /
```

```Javascript
/**
* @route GET /friends/request/outgoing
* @description Get list of send pending request
* @access Login required
* /
```

```Javascript
/**
* @route GET /friends
* @description Get list of friends
* @access Login required
* /
```

```Javascript
/**
* @route PUT /friends/request/:userId
* @description Accept/Reject a receive pending request
* @body {status: "accepted" or "declined"}
* @access Login required
* /
```

```Javascript
/**
* @route DELETE /friends/requests/:userId
* @description Cancel a friend request
* @access Login required
* /
```

```Javascript
/**
* @route DELETE /friends/:userId
* @description Remove a friend
* @access Login required
* /
```
