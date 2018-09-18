import { compose, filter, prop, test, anyPass } from 'ramda'

export const filterEntryList = list => search => {
  const filterer = filter(
    anyPass([
      compose(
        test(new RegExp(search, 'ig')),
        prop('name')
      ),
      compose(
        test(new RegExp(search, 'ig')),
        prop('phone')
      ),
    ])
  )

  return !search ? list : filterer(list)
}
