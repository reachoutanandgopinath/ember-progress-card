# ember-progress-card

 This addon helps you to create a custom UI component called Progress Card. 

It contains 3 types - Compact, Medium and Relaxed. The UI will be displayed by passing repsective parameters.

<img width="303" alt="Screenshot 2023-05-14 at 5 17 50 PM" src="https://github.com/reachoutanandgopinath/ember-progress-card/assets/122727376/a8fc85e0-60a3-4866-8934-d1c4efbad365">


Ex:

   Compact - type

     <ProgressCard @title="Growth Value" @percentage="5" @userName="John Dec" @color="#c823ee" @subTitle="3 key results"></ProgressCard>

   Medium - type
   
     <ProgressCard @title="Sass Industry - 2040"  @percentage="100" @type="medium" @color="#c823ee" @userName="John Dec" ></ProgressCard>

   Relaxed - type
   
    <ProgressCard  @title="IT sector" @subTitle="3 key results" @color="#c823ee" @percentage="33" @type="relaxed" @userName="Alex volta" @userUrl="https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-1-1179329.png"></ProgressCard>


Parameters allowed:

    @title, @subTitle, @color, @percentage (Designed to show percentage only), @type, @userName, @userUrl (User's thumbnail)


## Compatibility

* Ember.js v3.28 or above
* Ember CLI v3.28 or above
* Node.js v14 or above


## Installation

```
ember install ember-progress-card
```


## Usage

You can use this in any ember project.


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
