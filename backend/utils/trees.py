class AVLNode:
    def __init__(self, key, val):
        self.key, self.val = key, val
        self.height = 1
        self.left = None
        self.right = None

class AVLTree:
    def __init__(self):
        self.root = None

    def _height(self, node): return node.height if node else 0
    def _balance(self, node): return self._height(node.left) - self._height(node.right)

    def _rotate_right(self, y):
        x, T2 = y.left, y.left.right
        x.right, y.left = y, T2
        y.height = 1 + max(self._height(y.left), self._height(y.right))
        x.height = 1 + max(self._height(x.left), self._height(x.right))
        return x

    def _rotate_left(self, x):
        y, T2 = x.right, x.right.left
        y.left, x.right = x, T2
        x.height = 1 + max(self._height(x.left), self._height(x.right))
        y.height = 1 + max(self._height(y.left), self._height(y.right))
        return y

    def _insert(self, node, key, val):
        if not node:
            return AVLNode(key, val)
        if key < node.key:
            node.left = self._insert(node.left, key, val)
        else:
            node.right = self._insert(node.right, key, val)
        node.height = 1 + max(self._height(node.left), self._height(node.right))
        balance = self._balance(node)
        if balance > 1 and key < node.left.key:
            return self._rotate_right(node)
        if balance < -1 and key > node.right.key:
            return self._rotate_left(node)
        if balance > 1 and key > node.left.key:
            node.left = self._rotate_left(node.left)
            return self._rotate_right(node)
        if balance < -1 and key < node.right.key:
            node.right = self._rotate_right(node.right)
            return self._rotate_left(node)
        return node

    def insert(self, key, val):
        self.root = self._insert(self.root, key, val)


# AVL Tree for prioritizing low‑stock products in O(log n)
#Self‑balancing tree to track low‑stock products in O(log n).
