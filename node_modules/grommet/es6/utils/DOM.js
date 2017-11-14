export function filterByFocusable(elements) {
  return Array.prototype.filter.call(elements || [], function (element) {
    var currentTag = element.tagName.toLowerCase();
    var validTags = /(svg|a|area|input|select|textarea|button|iframe|div)$/;
    var isValidTag = currentTag.match(validTags) && element.focus;
    if (currentTag === 'a') {
      return isValidTag && element.childNodes.length > 0 && element.getAttribute('href');
    } else if (currentTag === 'svg' || currentTag === 'div') {
      return isValidTag && element.hasAttribute('tabindex') && element.getAttribute('tabindex') !== '-1';
    }
    return isValidTag;
  });
}

export function findScrollParents(element, horizontal) {
  var result = [];
  if (element) {
    var parent = element.parentNode;
    while (parent && parent.getBoundingClientRect) {
      var rect = parent.getBoundingClientRect();
      // 10px is to account for borders and scrollbars in a lazy way
      if (horizontal) {
        if (rect.width && parent.scrollWidth > rect.width + 10) {
          result.push(parent);
        }
      } else if (rect.height && parent.scrollHeight > rect.height + 10) {
        result.push(parent);
      }
      parent = parent.parentNode;
    }
    // last scrollable element will be the document
    // if nothing else is scrollable in the page
    if (result.length === 0) {
      result.push(document);
    }
  }
  return result;
}

export function getBodyChildElements() {
  var excludeMatch = /^(script|link)$/i;
  var children = [];
  [].forEach.call(document.body.children, function (node) {
    if (!excludeMatch.test(node.tagName)) {
      children.push(node);
    }
  });
  return children;
}

export function getNewContainer() {
  // setup DOM
  var container = document.createElement('div');
  document.body.insertBefore(container, document.body.firstChild);
  return container;
}

export var setTabIndex = function setTabIndex(tabIndex) {
  return function (element) {
    element.setAttribute('tabindex', tabIndex);
  };
};

export var copyAttribute = function copyAttribute(source) {
  return function (target) {
    return function (element) {
      element.setAttribute(target, element.getAttribute(source));
    };
  };
};

var deleteAttribute = function deleteAttribute(attribute) {
  return function (element) {
    return element.removeAttribute(attribute);
  };
};

var unsetTabIndex = setTabIndex(-1);
var saveTabIndex = copyAttribute('tabindex')('data-g-tabindex');
var restoreTabIndex = copyAttribute('data-g-tabindex')('tabindex');
var deleteTabIndex = deleteAttribute('tabindex');
var deleteTabIndexCopy = deleteAttribute('data-g-tabindex');

export var makeNodeFocusable = function makeNodeFocusable(node) {
  // do not touch aria live containers so that announcements work
  if (!node.hasAttribute('aria-live')) {
    node.setAttribute('aria-hidden', false);
    // allow children to receive focus again
    filterByFocusable(node.getElementsByTagName('*')).forEach(function (child) {
      if (child.hasAttribute('data-g-tabindex')) {
        restoreTabIndex(child);
      } else {
        deleteTabIndex(child);
      }
      deleteTabIndexCopy(child);
    });
  }
};

export var makeNodeUnfocusable = function makeNodeUnfocusable(node) {
  // do not touch aria live containers so that announcements work
  if (!node.hasAttribute('aria-live')) {
    node.setAttribute('aria-hidden', true);
    // prevent children to receive focus
    filterByFocusable(node.getElementsByTagName('*')).forEach(function (child) {
      if (child.hasAttribute('tabindex')) {
        saveTabIndex(child);
      }
      unsetTabIndex(child);
    });
  }
};

export default {
  copyAttribute: copyAttribute,
  filterByFocusable: filterByFocusable,
  findScrollParents: findScrollParents,
  makeNodeFocusable: makeNodeFocusable,
  makeNodeUnfocusable: makeNodeUnfocusable,
  getBodyChildElements: getBodyChildElements,
  getNewContainer: getNewContainer,
  setTabIndex: setTabIndex,
  unsetTabIndex: unsetTabIndex
};