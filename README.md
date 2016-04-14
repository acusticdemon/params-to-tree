# Params to tree

## Examples
```User.id > 5 AND User.id < 10```
```
require('params-to-tree')({'User.id.$gt': 5, 'User.id.$lt': 10});
```

```
{
    User: {
        id: {
            $gt: 5,
            $lt: 10
        }
    }
}
```